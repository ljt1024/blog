import request from '@/utils/request'
import qs from 'qs'
export function login(data) {
  return request({
    url: '/api/admin/token',
    method: 'post',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data)
  })
}

export function getInfo(token) {
  return request({
    url: `/api/admin/profile/${token}`,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    method: 'get'
  })
}

export function logout(token) {
  return request({
    url: `/api/admin/token/${token}`,
    method: 'DELETE'
  })
}
