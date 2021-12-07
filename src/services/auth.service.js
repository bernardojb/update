import axios from "axios";
import authHeader from './auth-header';

const API_URL = "https://hokup.ragna4th.com/api/v1/";

class AuthService {
  login(login, password) {
    return axios
      .post(API_URL + 'Profile/Token', {
        login,
        password
      })
      .then(response => {
        console.log("RESPONSE >>>>>>>>>>>>>>", response)
        if (response.data.data.access_token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("profile");
    localStorage.removeItem("subs");
  }

  register(email, password, confirmPassword) {
    return axios.post(API_URL + "user", {
      email,
      password,
      confirmPassword,
    });
  }

  registerProfile(
    fullName,
    birthday,
    cpf,
    phone,
    crm,
    //endereço
    cep,
    street,
    number,
    neighborhood,
    state,
    city
  ) {
    const token = localStorage.getItem('user')
    console.error('**************', token, authHeader())
    return axios.post(API_URL + "profile", {
      //Profile
      fullName,
      birthday,
      phone,
      cpf,
      crm,
      //Enredeço
      cep,
      street,
      number,
      neighborhood,
      state,
      city
    },
      {
        headers: authHeader()
      });
  }

  updateProfile(
    fullName,
    birthday,
    // cpf,
    phone,
    crm,
    //endereço
    cep,
    street,
    number,
    neighborhood,
    state,
    city
  ) {

    axios.get(API_URL + 'profile', { headers: authHeader() })
      .then((response) => {
        console.log("PROFILEEEEEEEEEEE", response.data);
        localStorage.setItem('profile', JSON.stringify(response.data))
      })
      .catch((err) => {
        console.log("PROFILEEEEEEEEEEE error", err);
        return err
      })

    const profile = JSON.parse(localStorage.getItem('profile'))

    return axios.put(API_URL + `profile/${profile.user_id}`, {
      //Profile
      fullName,
      birthday,
      phone,
      // cpf,
      crm,
      //Enredeço
      cep,
      street,
      number,
      neighborhood,
      state,
      city
    },
      {
        headers: authHeader()
      });
  }

  registerCard(
    card_number,
    verification_value,
    month,
    year,
    first_name,
    last_name
  ) {
    const user = localStorage.getItem('user')
    console.error('**************', user, authHeader())
    return axios.post(API_URL + "profile/generateCCToken", {
      //Card
      card_number,
      verification_value,
      month,
      year,
      first_name,
      last_name,
    },
      {
        headers: authHeader()
      });
  }

  registerPlano(
    identifier
  ) {
    const user = localStorage.getItem('user')
    console.error('**************', user, authHeader())
    return axios.post(API_URL + "subscription", {
      identifier
    },
      {
        headers: authHeader()
      });
  }

  registerPlanoCoupon(
    identifier,
    code
  ) {
    // const user = localStorage.getItem('user')
    // console.error('**************', user, authHeader())
    return axios.post(API_URL + "subscription/coupon", {
      identifier,
      code
    },
      {
        headers: authHeader()
      });
  }

  getCurrentUser() {
    // console.log('>>>>>>>>>>>>>>', JSON.parse(localStorage.getItem('user') ))
    return JSON.parse(localStorage.getItem('user'));
  }

  getSelf() {
    return new Promise((res, rej) => {
      const user = localStorage.getItem('user')

      console.log("USEEEEER GETT SELF", user)

      if (user) {
        axios.get(`${API_URL}profile`, { headers: authHeader() })
          .then((data) => {
            res(data)
            return data
          })
          .catch((err) => {
            rej(err)
            return err
          })
      } else {
        return rej('Unauthorized')
      }
    })
  }

  getPlan() {
    return new Promise((res, rej) => {
      const user = localStorage.getItem('user')

      if (user) {
        axios.get(`${API_URL}plan`, { headers: authHeader() })
          .then((data) => {
            res(data)
            return data
          })
          .catch((err) => {
            rej(err)
            return err
          })
      } else {
        return rej('Unauthorized')
      }
    })
  }

  getSub() {
    return new Promise((res, rej) => {
      const user = localStorage.getItem('user')

      if (user) {
        axios.get(`${API_URL}mySubs`, { headers: authHeader() })
          .then((data) => {
            res(data)
            return data
          })
          .catch((err) => {
            console.log(">>> ERROR ", err);
            rej(err)
            return err
          })
      } else {
        return rej('Unauthorized')
      }
    })
  }

  checkCoupon(code) {
    return axios.post(API_URL + "coupon/check", {
      code
    },
      {
        headers: authHeader()
      }
    );
  }

  updateCupom() {
    axios.get(API_URL + 'cupom', { headers: authHeader() })
      .then((response) => {
        console.log("PROFILEEEEEEEEEEE", response.data);
        localStorage.setItem('profile', JSON.stringify(response.data))
      })
      .catch((err) => {
        console.log("PROFILEEEEEEEEEEE error", err);
        return err
      })
  }

  forgotPassword(email) {
    return axios.post(API_URL + "Profile/forgot", {
      email
    }
    );
  }

  forgotPasswordRedefine(email, signature, password, confirmPassword) {
    return axios.post(API_URL + `Profile/forgot/${email}?signature=${signature}`, {
      password,
      confirmPassword
    }
    );
  }

  cancelSub() {
    axios.get(API_URL + 'mySubs', { headers: authHeader() })
      .then((data) => {
        localStorage.setItem('subs', JSON.stringify(data.data))
      })
      .catch((err) => {
        return err
      })

    const subs = JSON.parse(localStorage.getItem('subs'))

    return axios.delete(API_URL + `subscription/${subs.data.subId}`,
      {
        headers: authHeader()
      });
  }

  deleteUser() {
    axios.get(API_URL + 'user', { headers: authHeader() })
    .then((data) => {
      console.log("PROFILEEEEEEEEEEE", data.data);
      localStorage.setItem('userId', JSON.stringify(data.data))
    })
    .catch((err) => {
      console.log("PROFILEEEEEEEEEEE error", err);
      return err
    })

    const userId = JSON.parse(localStorage.getItem('userId'))

    console.log(">>>>>>>>>>>>>>>>> profileeee", userId, userId.id)

    return axios.delete(API_URL + `user/${userId.id}`, 
    {
      headers: authHeader()
    });
  }

  isLogged() {
    const user = localStorage.getItem('user')

    console.log(">>>>> USER", user)

    return new Promise((res) => {
      if (user && user.data.access_token) {
        console.log(">>>>> USER && USER DATA OK")

        if (user.data.has_card && user.data.has_subs) {
          console.log(">>>>> HAS CARD + HAS SUBS")
          return res("profile")

        } else {
          console.log(">>>>> HAS PROFILE")
          return res("plano")
        }
      }
      else {
        res(" Precisa cadastro ")
      }
    })
  }

  changeProfilePassword(currentPassword, newPassword, confirmNewPassword) {
    return axios.post(API_URL + "user/password", {
      currentPassword,
      newPassword,
      confirmNewPassword,
    });
  }

  // isLogged() {
  //   const user = localStorage.getItem('user')

  //   return new Promise((res) => {
  //     if (user) {
  //       console.log("USER ? >>>>>>>>>>>>>>>>>>>>", user)
  //       axios.get(`${API_URL}profile`, { headers: authHeader() })
  //         .then(() => {
  //           res(true)
  //         })
  //         .catch((err) => {
  //           console.error("NO USER >>>>>>>>>>>>>>>>>>", err)
  //           res(false)
  //         })
  //     } else { res(false) }
  //   })
  // }
}

export default new AuthService();