export const convertDto = (dto: any, obj: any) => {
    for (const [key, value] of Object.entries(dto)) {
      obj[key] = value;
    }
  };