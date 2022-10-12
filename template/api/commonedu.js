import request from '@/utils/request'
export default {
  getPageList(page, limit, courseId) {
    return request({
      url: `/eduservice/comment/getCommentPage/${page}/${limit}/${courseId}`,
      method: 'get'
    })
  },
  addComment(comment) {
    return request({
      url: `/eduservice/comment/auth/addComment`,
      method: 'post',
      data: comment
    })
  }
}
