import axios from 'axios'
import { ref } from 'vue'

export const registration = () => {
  const username = ref("")
  const firstname = ref("")
  const lastname = ref("")
  const surname = ref("")
  const age = ref("")
  const password = ref("")

  const register = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/registration/",
        {
          username: username.value,
          firstname: firstname.value,
          lastname: lastname.value,
          surname: surname.value,
          age: age.value,
          password: password.value,
        }
      );
    } catch (e) {
      console.log(e);
    }
  }
  return {
    username, firstname, lastname, surname, age, password, register
  }
}
