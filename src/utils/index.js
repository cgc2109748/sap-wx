export const isEmpty = function (val) {
    return !(!!val ? typeof val === 'object' ? Array.isArray(val) ? !!val.length : !!Object.keys(val).length : true : false);
}

export const compact = (array) => {
    let resIndex = 0
  const result = []

  if (array == null) {
    return result
  }

  for (const value of array) {
    if (value) {
      result[resIndex++] = value
    }
  }
  return result
}

export const filter = (array, predicate) => {
    let index = -1
    let resIndex = 0
    const length = array == null ? 0 : array.length
    const result = []

    while (++index < length) {
        const value = array[index]
        if (predicate(value, index, array)) {
            result[resIndex++] = value
        }
    }
    return result
}

export const formatTime = (data) => {
    const date = new Date(data);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return [year, month, day].join('-')
    // return [year, month, day].join('-') + ' ' + [hour, minute, second].join(':')
}
export const formatDateTime = (data) => {
    const date = new Date(data);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return [year, month, day].join('_') + '_' + [hour, minute, second].join('_')
}


export const formatTimeToYear = (data) => {
    const date = new Date(data);
    const year = date.getFullYear();

    return [year].join()
}