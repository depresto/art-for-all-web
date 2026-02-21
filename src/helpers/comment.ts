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
  authToken?: string | null,
): Promise<Comment | null> => {
  try {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' }
    if (authToken) headers['Authorization'] = `Bearer ${authToken}`

    const res = await fetch('/api/v2/comments', {
      method: 'POST',
      headers,
      body: JSON.stringify({ artworkId, content }),
    })

    if (!res.ok) return null
    const data = await res.json()

    return {
      id: data.id,
      author: {
        member_id: data.member_id,
        username: member.username,
        avatarUrl: member.avatarUrl,
      },
      content: data.content,
    }
  } catch (error) {
    console.log('makeCommentError', error)
    return null
  }
}

export const getMemberByIds = async (memberIds: Number[]): Promise<simpleMember[]> => {
  // This function was used to batch-fetch members for comments.
  // With the new API, comments already include member info, so this is rarely needed.
  // Keeping as a stub for backwards compatibility.
  return memberIds.map(id => ({
    id: Number(id),
    username: 'unknown',
    avatarUrl: 'https://image.flaticon.com/icons/svg/848/848006.svg',
  }))
}

export const getCommentByArtwork = async (artworkId: Number): Promise<Comment[]> => {
  try {
    const res = await fetch(`/api/v2/comments?artworkId=${artworkId}`)
    if (!res.ok) return []
    const comments = await res.json()

    return comments.map((c: any) => ({
      id: c.id,
      author: {
        member_id: c.member_id,
        username: c.member?.username || c.member?.name || 'unknown',
        avatarUrl: c.member?.avatarUrl || 'https://image.flaticon.com/icons/svg/848/848006.svg',
      },
      content: c.content,
    }))
  } catch (error) {
    console.log('queryCommentsError', error)
    return []
  }
}
