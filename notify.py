from urllib import request
import re
import time


#waiting time
time_out = 600 
 #key words
select_name = "s02e10"
#updata msg
print_true_msg = "更新啦" 
print_false_msg = "再等会"
#watch URL
watch_URL = "http://zhuixinfan.com/viewtvplay-1193.html" 


def notify_me(result):
  if(result!=None):
    print(print_true_msg)
    return print_true_msg
  else:
    print(print_false_msg)
    return print_false_msg

def request_result():
  result_rq = request.Request(watch_URL)
  result_rq.add_header('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36')
  rq_html = request.urlopen(result_rq).read().decode('utf-8')
  search_result = re.search(select_name,rq_html,re.I)
  return search_result

def Main():
  D=None
  while D!=print_true_msg:
    search_result = request_result()
    D=notify_me(search_result)
    time.sleep(time_out)

Main()