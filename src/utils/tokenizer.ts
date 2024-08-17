export const encodeAsync = async (str: string) => {
  // @ts-ignore
  const { encode } = await import('https://unpkg.com/gpt-tokenizer@2.2.1/dist/cl100k_base.js');

  return encode(str).length;
};
