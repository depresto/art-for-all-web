export const userRoles = ['general-manager', 'project-manager', 'observer', 'subject', 'anonymous'] as const
export type UserRole = typeof userRoles[number]

export const roleMapping = {
  'general-manager': '管理員',
  'project-manager': '研究人員',
  observer: '觀察員',
  subject: '受試者',
  anonymous: '路人',
}

export type member = {
  id: any | null
  name: string | null
  email: string | null
  username: string
  avatarUrl: string | ''
}

export const nullMember = {
  id: null,
  name: null,
  email: null,
  username: 'null',
  avatarUrl: '',
}

export type simpleArtwork = {
  id: number
  title: string
  featureImageUrl: string
  saved: boolean
}
