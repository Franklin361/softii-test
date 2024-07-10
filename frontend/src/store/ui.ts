import { defineStore, acceptHMRUpdate } from 'pinia';
import { ref } from 'vue';

type Action = 'tip-per-person' | 'total-tip';

export const useUiStore = defineStore('ui', () => {
  const isNumPadActive = ref(false);
  const typeAction = ref<Action | null>(null);

  const setNumPadActive = (isActive: boolean, action: Action | null) => {
    isNumPadActive.value = isActive;
    typeAction.value = action;
  };

  return {
    isNumPadActive,
    typeAction,
    setNumPadActive,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUiStore, import.meta.hot));
}
