import info from "../data/content-info.json";

export const useContent = (page: string) => {
  return useAsyncData(`content-${page}`, async () => {
    // console.log("Fetching content...");
    // const content = 
    // console.log("Fetched content:", content);
    return info;
  });
};
