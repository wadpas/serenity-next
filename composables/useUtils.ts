export const useUtils = () => {
  const sayText = () => {
    console.log('hello world');
  };

  return {
    sayText,
  };
};
