import { gql } from '@apollo/client'
import types from '../types'
import { createApolloClient } from './apollo'

const apolloClient = createApolloClient({ authToken: null })

export type Comment = {
  id: Number
  author: {
    member_id: Number
    username: string
    avatarUrl: string
  }
  content: string
}

export type simpleMember = {
  id: number
  username: string
  avatarUrl: string
}

export const makeComment = async (
  member: simpleMember,
  artworkId: number,
  content: string,
): Promise<Comment | null> => {
  const query = gql`
    mutation makeComment($artworkId: bigint!, $content: String!, $memberId: Int!) {
      insert_artwork_comment(objects: { artwork_id: $artworkId, content: $content, member_id: $memberId }) {
        returning {
          artwork_id
          content
          id
          member_id
          created_at
        }
      }
    }
  `
  return apolloClient
    .mutate<types.makeComment>({
      mutation: query,
      variables: {
        artworkId: artworkId,
        memberId: member.id,
        content: content,
      },
    })
    .then(result => {
      if (result.data === undefined) return null

      if (result.data === null) return null

      if (result.data.insert_artwork_comment == null) return null

      var data = result.data.insert_artwork_comment.returning[0]
      var comment: Comment = {
        id: data.id,
        author: {
          member_id: data.member_id,
          username: member.username,
          avatarUrl: member.avatarUrl,
        },
        content: data.content,
      }

      return comment
    })
    .catch(error => {
      console.log('makeCommentError')
      console.log(error)
      return null
    })
}

export const getMemberByIds = async (memberIds: Number[]): Promise<simpleMember[]> => {
  const queryMembers = gql`
    query queryMembers($_in: [bigint!] = "") {
      member(where: { id: { _in: $_in } }) {
        id
        username
      }
    }
  `

  return await apolloClient
    .query({
      query: queryMembers,
      variables: {
        _in: memberIds,
      },
    })
    .then(result => {
      if (result.data === undefined) return []

      if (result.data === null) return []

      if (result.data.member == null) return []

      return result.data.member.map((member: { id: number; username: string }) => {
        var aMember: simpleMember = {
          id: member.id,
          username: member.username,
          avatarUrl: 'https://image.flaticon.com/icons/svg/848/848006.svg',
        }
        return aMember
      })
    })
    .catch(error => {
      console.log('queryMembersError')
      console.log(error)
      return []
    })
}

export const getCommentByArtwork = async (artworkId: Number): Promise<Comment[]> => {
  const queryComments = gql`
    query queryComments($_eq: bigint!) {
      artwork_comment(order_by: { id: asc }, where: { artwork_id: { _eq: $_eq } }) {
        content
        id
        member_id
        created_at
      }
    }
  `

  var comments: Comment[] = await apolloClient
    .query({
      query: queryComments,
      variables: {
        _eq: artworkId,
      },
    })
    .then(result => {
      if (result.data === undefined) return []

      if (result.data === null) return []

      if (result.data.comment == null) return []

      var return_comments = result.data.comment

      return return_comments.map((comment: { id: number; member_id: Number; content: string; created_at: any }) => {
        var aComment: Comment = {
          id: comment.id,
          author: {
            member_id: comment.member_id,
            username: 'loading',
            avatarUrl: 'https://image.flaticon.com/icons/svg/848/848006.svg',
          },
          content: comment.content,
        }
        return aComment
      })
    })
    .catch(error => {
      console.log('queryCommentsError')
      console.log(error)
      return []
    })

  var memberIds: Number[] = comments.map(c => c.author.member_id)
  var members: simpleMember[] = await getMemberByIds(memberIds)

  const setMemberToComment = (comment: Comment, memberCandidates: simpleMember[]): Comment => {
    var member = memberCandidates.find(e => e.id === comment.author.member_id)
    if (typeof member == undefined) return comment
    if (member) {
      comment.author.username = member.username
      comment.author.avatarUrl = member.avatarUrl
    }
    return comment
  }
  comments = comments.map(c => setMemberToComment(c, members))

  return comments
}
