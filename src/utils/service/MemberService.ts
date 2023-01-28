import httpClient from './httpClient';

class MemberService {
  signUp(email: string, nickname: string, password: string) {
    httpClient
      .fetch('/members', {
        method: 'POST',
        body: JSON.stringify({
          email,
          nickname,
          password,
        }),
      })
      // res= > access_token
      // accss_token -> localStorage 저장
      .then(res => res.json());
  }

  logout() {
    //1.accesstoken -> 삭제
    //2. home 으로 이동
  }
}

export const Member = new MemberService();
