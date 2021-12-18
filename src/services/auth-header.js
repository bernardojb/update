export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    // console.log('chamouuuuuuuuuuuuuuuuuuuuuuuuuu', user)
    
    if (user && user.data.access_token) {
      // console.log('mameeeeeeeeeeeeeeeeei', user)
      return { 'Authorization': `Bearer ${user.data.access_token}` };
    } else {
      // console.log('fudeuuuuuuuuuuuuuuuuuuuuuuu', user)
      return {};
    }
  }