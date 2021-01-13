const DIRECT_FRONT = 'front'
const DIRECT_BEHIND = 'behind'

const defaultOptions = {
  data: [],
  itemSize: 0,
  viewHeight: 0,
}

export default class VirtualModel {
  constructor(options) {
    this.options = {...defaultOptions, ...options}

    this._prevOffset = 0
    this._prevIndex = 0

    this.model = {
      data: [],
      padFront: 0,
      padBehind: 0
    }

    this.init(this.options)
  }
  init(options) {
    const { viewHeight, itemSize, data } = options

    if (viewHeight === 0 || itemSize === 0) return

    this.viewNum = Math.ceil(viewHeight / itemSize)
    this.renderNum = this.viewNum * 3
    this.totalNum = data.length
    // init model
    if (this.totalNum <= this.renderNum) {
      this.setModel(0)
    } else {
      this.setModel(this.correctIndex(this._prevIndex))
    }
  }
  updateOptions(newOpts, offset) {
    this.options = {
      ...this.options,
      ...newOpts
    }
    this._prevOffset = offset
    this.init(this.options)
  }
  updateModel(offset) {
    if (this.totalNum <= this.renderNum) return

    const index = Math.floor(offset / this.options.itemSize)
    if (this._prevIndex === index) return

    const direction = this.getDirection(offset)

    if (direction === DIRECT_FRONT) {
      this.handleFront(index)
    }
    if (direction === DIRECT_BEHIND) {
      this.handleBehind(index)
    }
  }
  handleFront(index) {
    if (index > this._prevIndex) {
      return
    }
    index = Math.max(index - this.viewNum, 0)

    this.setModel(this.correctIndex(index))
  }
  handleBehind(index) {
    if (index < this._prevIndex + this.viewNum) {
      return
    }

    this.setModel(this.correctIndex(index))
  }
  getDirection(offset) {
    let dir = offset > this._prevOffset ? DIRECT_BEHIND : DIRECT_FRONT
    this._prevOffset = offset
    return dir
  }
  correctIndex(index) {
    if (index + this.renderNum > this.totalNum) {
      index = this.totalNum - this.renderNum
    }
    return index
  }
  setModel(index) {
    const { data, itemSize } = this.options
    const end = Math.min(index + this.renderNum, this.totalNum)
    this.model = {
      data: data.slice(index, end),
      padFront: index * itemSize,
      padBehind:  (this.totalNum - end) * itemSize
    }
    // 记录已生效的 index
    this._prevIndex = index
  }
}