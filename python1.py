#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Pomodoro 番茄工作法 https://en.wikipedia.org/wiki/Pomodoro_Technique
# ====== 🍅 Tomato Clock =======
# ./tomato.py         # start a 25 minutes tomato clock + 5 minutes break
# ./tomato.py -t      # start a 25 minutes tomato clock
# ./tomato.py -t <n>  # start a <n> minutes tomato clock
# ./tomato.py -b      # take a 5 minutes break
# ./tomato.py -b <n>  # take a <n> minutes break
# ./tomato.py -h      # help


import sys
import time
import subprocess

WORK_MINUTES = 25
BREAK_MINUTES = 5


def main():
    try:
        if len(sys.argv) <= 1:
            print(f'🍅 tomato {WORK_MINUTES} minutes. Ctrl+C to exit')
            tomato(WORK_MINUTES, 'It is time to take a break')
            print(f'🛀 break {BREAK_MINUTES} minutes. Ctrl+C to exit')
            tomato(BREAK_MINUTES, 'It is time to work')

        elif sys.argv[1] == '-t':
            minutes = int(sys.argv[2]) if len(sys.argv) > 2 else WORK_MINUTES
            print(f'🍅 tomato {minutes} minutes. Ctrl+C to exit')
            tomato(minutes, 'It is time to take a break')

        elif sys.argv[1] == '-b':
            minutes = int(sys.argv[2]) if len(sys.argv) > 2 else BREAK_MINUTES
            print(f'🛀 break {minutes} minutes. Ctrl+C to exit')
            tomato(minutes, 'It is time to work')

        elif sys.argv[1] == '-h':
            help()

        else:
            help()

    except Exception as ex:
        print(ex)
        exit(1)


def tomato(minutes, notify_msg):
    start_time = time.perf_counter()
    while True:
        diff_seconds = int(round(time.perf_counter() - start_time))
        left_seconds = minutes * 60 - diff_seconds
        if left_seconds <= 0:
            print('')
            break

        countdown = '{}:{} ⏰'.format(int(left_seconds / 60), int(left_seconds % 60))
        duration = min(minutes, 25)
        progressbar(diff_seconds, minutes * 60, duration, countdown)
        time.sleep(1)

    notify_me(notify_msg)


def progressbar(curr, total, duration=10, extra=''):
    frac = curr / total
    filled = round(frac * duration)
    print('\r', '🍅' * filled + '--' * (duration - filled), '[{:.0%}]'.format(frac), extra, end='')


def notify_me(msg):
    '''
    terminal-notifier -> https://github.com/julienXX/terminal-notifier#download
    terminal-notifier -message <msg>
    say -v Ting-Ting <msg>
    #Cantonese：
    say -v Sin-ji <msg>
    '''
    print(msg)
    try:
        subprocess.run(['terminal-notifier', '-title', '🍅', '-message', msg])
        subprocess.run(['say', '-v', 'Daniel', msg])
    except:
        pass


def help():
    print('====== 🍅 Tomato Clock =======')
    print(f'./tomato.py         # start a {WORK_MINUTES} minutes tomato clock + {BREAK_MINUTES} minutes break')
    print(f'./tomato.py -t      # start a {WORK_MINUTES} minutes tomato clock')
    print(f'./tomato.py -t <n>  # start a <n> minutes tomato clock')
    print(f'./tomato.py -b      # take a {BREAK_MINUTES} minutes break')
    print(f'./tomato.py -b <n>  # take a <n> minutes break')
    print(f'./tomato.py -h      # help')


if __name__ == "__main__":
    main()