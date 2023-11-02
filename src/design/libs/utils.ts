export const bytesToSize = (bytes: number) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) return '0 Byte';
  const i = Number(Math.floor(Math.log(bytes) / Math.log(1024)));
  const sizeNum = bytes / Math.pow(1024, i);
  return `${sizeNum.toFixed(2)} ${sizes[i]}`;
};
