// 获取posts
import { get } from './methods'
export const getPosts=params => get('/posts')(params);