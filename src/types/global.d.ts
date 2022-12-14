type MemberProps = {
  sub: string
  memberId: string
  name: string | null
  email: string | null
  username: string | null
  avatarUrl: string | null
  role: string
}

namespace Express {
  type User = MemberProps

  export interface Request {
    auth: any
  }
}
