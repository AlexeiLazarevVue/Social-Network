import convertToImage from '@/shared/lib/convertToImage';
import axios from 'axios';
import { onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';

export const getPost = (props) => {
  const store = useStore();

  const post = ref('');
  const isPostLoading = ref(true);
  const token = computed(() => store.state.token);

  const getData = async () => {
    const response = await axios.get(`http://localhost:5000/api/posts/${props.id}`, {
      headers: {
        Authorization: 'bearer ' + token.value,
      },
    }
    );

    post.value = response.data;
    post.value.image.data.data = convertToImage(post.value.image.data.data);

    isPostLoading.value = false;
  };

  onMounted(getData);

  return {
    post,
    isPostLoading,
  };
};
