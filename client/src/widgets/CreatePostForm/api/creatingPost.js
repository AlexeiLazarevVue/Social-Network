import axios from 'axios';
import { ref } from 'vue';
import { useStore } from 'vuex';

export const creatingPost = () => {
  const title = ref('');
  const content = ref('');
  const image = ref('');
  const store = useStore()
  const setImage = (event) => {
    image.value = event.target.files[0];
  };

  const createPost = async () => {
    try {
      const id = store.state.id
      const token = store.state.token;
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
