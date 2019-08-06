// 获取posts
import { get,post } from './methods'

export const getPosts=params => get('/posts')(params);
export const postPs=post('/posts');