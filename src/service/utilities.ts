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
  const pattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
  return pattern.test(url)
}

const validateYoutubeUrl = (url: string): boolean => {
  const pattern = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
  return pattern.test(url)
}

export interface FileReq {
  name: string,
  file: File,
  type: string,
}

export const createFileObj = (file: File) : FileReq => {
  return {
    name: file.name,
    file: file,
    type: file.type,
  }
}

export const getType = (content: string | File): string => {
  if(typeof content === 'object') {
    return 'file'
  } else if(validateYoutubeUrl(content as string)) {
    return 'youtube'
  } else if(validateImageUrl(content as string)) {
    return 'image'
  } else if(validateUrl(content as string)){
    return 'url'
  } else {
    return 'text'
  }
}
