export const b64toBlob = (b64Data, contentType='', sliceSize=512): Blob => {
  const byteCharacters: string = atob(b64Data);
  const byteArrays: Uint8Array[] = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray as Uint8Array);
  }

  return new Blob(byteArrays as BlobPart[], {type: contentType});
}

export const calculateTime = (totalDuration: number, currentTime: number): number => {
  return (100*currentTime)/totalDuration
}

export const checkIfEmpty = (obj: Object): boolean => {
  return !Object.keys(obj).length
}


export const getYoutubeUrlId = (url: string): string => {
  return url.split('v=')[1].split('&')[0]
}

const validateImageUrl = (url: string): boolean => {
  const pattern = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|svg))/;
  return pattern.test(url);
}

const validateUrl = (url: string): boolean => {
  const pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
  return pattern.test(url)
}

const validateYoutubeUrl = (url: string): boolean => {
  const pattern = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
  return pattern.test(url)
}

export const getType = (content: string): string => {
  if(validateYoutubeUrl(content)) {
    return 'youtube'
  } else if(validateImageUrl(content)) {
    return 'image'
  } else if(validateUrl(content)){
    return 'url'
  } else {
    return 'text'
  }
}
