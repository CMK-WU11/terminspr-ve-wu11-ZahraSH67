export const limitText = (text, limit) => {
    return text && text.length > limit ? `${text.substring(0, limit)}...` : text;
  };