export interface FetchDataByAPIOptions<DefaultRes> {
  uri: string
  requestInit?: RequestInit
  useCorsPrefix?: boolean
  defaultRes: DefaultRes
}

async function fetchDataByAPIWithCors<DefaultRes>({
  uri, 
  defaultRes,
  requestInit,
}: FetchDataByAPIOptions<DefaultRes>) {
  let response = defaultRes;
  
  await fetch(uri, {
    ...requestInit,
  })
    .then(res => res.json())
    .then(res => {
      response = res;
    })
    .catch(rej => console.log(rej));
  return response;
}

export default fetchDataByAPIWithCors;