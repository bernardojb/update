import axios from "axios";
import authHeader from './auth-header';

// const API_URL = "https://hokup.ragna4th.com/api/v1/";
const API_URL = "https://api.grupoupdate.com.br/api/v1/";

class AuthService {
  login(login, password) {
    return new Promise((res, rej) => {
      axios
        .post(API_URL + 'Profile/Token', {
          login,
          password
        })
        .then(response => {
          // console.log("RESPONSE >>>>>>>>>>>>>>>>>>>>>", response)
          if (response.data.data.access_token) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
          res(response.data)
        })
        .catch(err => { rej(err) })
    })
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("getUser");
    localStorage.removeItem("profile");
    localStorage.removeItem("subs");
    localStorage.removeItem("userId");
    localStorage.removeItem("Cards");
    localStorage.removeItem("plan");
  }

  register(email, password, confirmPassword) {
    return axios
      .post(API_URL + "user", {
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
    console.log("PROFILE TOKEN", token);
    const profile = axios.post(API_URL + "profile", {
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
    return profile;
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
    // const user = localStorage.getItem('user')
    // console.log("CARD USER", user);
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
    // const user = localStorage.getItem('user')
    // console.log("PLANO USER", user);
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
    return JSON.parse(localStorage.getItem('user'));
  }

  getSelf() {
    return new Promise((res, rej) => {
      const user = localStorage.getItem('user')

      if (user) {
        axios.get(`${API_URL}profile`, { headers: authHeader() })
          .then((data) => {
            // console.log("GET SELF", data.data);
            localStorage.setItem('profile', JSON.stringify(data.data))
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
            localStorage.setItem('subs', JSON.stringify(data.data))
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

  getCard() {
    return new Promise((res, rej) => {
      axios.get(`${API_URL}card`, { headers: authHeader() })
        .then((data) => {
          res(data)
          return data
        })
        .catch((err) => {
          console.log(">>> ERROR ", err);
          rej(err)
          return err
        })
    })
  }

  checkCoupon(code) {
    return axios.post(API_URL + "coupon/check", {
      code
    },
      {
        headers: authHeader()
      }
    )
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
    return axios.delete(API_URL + `user/${userId.id}`,
      {
        headers: authHeader()
      });
  }

  deleteCard(cardIndex) {
    return axios.delete(API_URL + `card/${cardIndex.paymentMethodId}`,
      {
        headers: authHeader()
      });
  }

  setDefaultCard(cardIndex) {
    return axios.put(API_URL + `card/${cardIndex.paymentMethodId}`, {
      //Profile
      cardIndex,
    },
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
    },
      {
        headers: authHeader()
      }
    );
  }

  getFaturas() {
    return axios.post(API_URL + "user/invoices",
      {},
      {
        headers: authHeader()
      });
  }

  verifyLogin() {
    const user = localStorage.getItem('user')

    if (!user) {
      window.location.href = "/login";
    }
  }

  getUpdatedUser() {
    const user = JSON.parse(localStorage.getItem('user')) 

    if (user) {
      return axios.get(API_URL + 'user', { headers: authHeader() })
        .then((response) => {
          localStorage.setItem('getUser', JSON.stringify(response.data))
          const getUser = JSON.parse(localStorage.getItem('getUser'))
          console.log("UPDATED USER", getUser);
          // const getOldUser = JSON.parse(user)
          console.log("old USER", user.data);

          if (user.data.has_profile != getUser.has_profile ||
            user.data.has_card != getUser.has_card ||
            user.data.has_subs != getUser.has_subs ||
            user.data.access_until != getUser.has_access_until
          ) {
            console.log("RESPONSE DATA BEFORE", response.data);
            localStorage.setItem("user", JSON.stringify({
              data: {
                access_token: user.data.access_token,
                refresh_token: user.data.refresh_token,
                has_profile: getUser.has_profile,
                has_subs: getUser.has_subs,
                has_card: getUser.has_card,
                access_until: getUser.has_access_until
              }
            }));
          } else {
            console.log("ELSE RESPONSE DATA", response.data);
          }
        })
        .catch((err) => {
          console.log("UPDATED error", err);
          return err
        })
    }
  }

  //PREVELAT

  // getUpdatedUser() {
  //   let user = JSON.parse(localStorage.getItem('user'));
  //   console.log('local user', user.data);

  //   if (user) {

  //   axios.get(API_URL + 'user', { headers: authHeader() }).then(response => {
  //     console.log('response', response.data);
  //     let f = false;
  //     if (response.data.has_profile != user.data.has_profile) {
  //       user.data.has_profile = response.data.has_profile;
  //       f = true;
  //     }
  //     if (response.data.has_card != user.data.has_card) {
  //       user.data.has_card = response.data.has_card;
  //       f = true;
  //     }
  //     if (response.data.has_subs != user.data.has_subs) {
  //       user.data.has_subs = response.data.has_subs;
  //       f = true;
  //     }
  //     if (response.data.has_access_until != user.data.has_access_until) {
  //       user.data.access_until = response.data.has_access_until;
  //       f = true;
  //     }
  //     if (f) {
  //       console.log(user.data);
  //       // localStorage.setItem('user', JSON.stringify(user.data));
  //     }
  //     console.log(response.data)
  //   });
  // }
  // }
}

export default new AuthService();