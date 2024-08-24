const generateFakeGUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

const getFakeState = () => {
    const states = ["Pending", "Analyzing", "Finished"];
    const randomIndex = Math.floor(Math.random() * states.length);
    return states[randomIndex];
};

export const generateFakeData = () => {
    const id = generateFakeGUID();
    const state = getFakeState();
    return {
      id: id,
      name: `test_file_${id.split('-')[0]}.exe`,
      state: state,
      result: state === 'Finished' ? Math.floor(Math.random() * 2) : -1,
      api_calls: []
    };
};

export const generateFakeDataSource = (count: number) => {
    const data = [];
    for (let i = 1; i <= count; i++) {
      const item = generateFakeData();
      data.push({
        number: i,
        ...item
      });
    }
    return data;
};