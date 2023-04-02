import axios from 'axios';
import { ref } from 'vue';
import { useStore } from 'vuex';

export const creatingPost = () => {
  const title = ref('');
  const content = ref('');
  const image = ref('');
  const store = useStore()
  const reader = new FileReader();
  const setImage = (event) => {
    image.value = event.target.files[0];
  };

  const createPost = async () => {
    try {
      console.log(reader);
      console.log(image.value);
      console.log();
      reader.readAsDataURL(image.value);
      reader.onload = async () => {
        const encodedImage = reader.result.split(',')[1];
        const id = store.getters.getCookie('id');
        const token = store.getters.getCookie('token');
        const response = await axios.post(
          'http://localhost:5000/api/posts/',
          {
            userId: id,
            title: title.value,
            content: content.value,
            image: image.value,
          },
          {
            headers: {
              Authorization: 'bearer ' + token,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        console.log(response.data);
      };
    } catch (e) {
      console.log(e);
    }
  };
  return {
    title,
    content,
    setImage,
    createPost,
  };
};
