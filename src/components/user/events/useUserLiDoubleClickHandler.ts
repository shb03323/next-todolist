import { useRouter } from "next/router";

const useUserLiDoubleClickHandler = () => {
  const router = useRouter();
  const handleDoubleClick = (userId: number) => {
    router.push(`/todo?userId=${userId}`)
  };

  return { handleDoubleClick };
};

export default useUserLiDoubleClickHandler;
