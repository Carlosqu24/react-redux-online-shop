export const formatUrlParams = (object) => {
      const allKeys = Object.keys(object);
      const allValues = Object.values(object);

      let urlParams = "?"

      for (let i = 0; i < allKeys.length; i++) {
            urlParams += `${allKeys[i]}=${allValues[i]}&`;
      }

      return urlParams;
};