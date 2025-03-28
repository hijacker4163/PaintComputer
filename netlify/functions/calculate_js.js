exports.handler = async (event, context) => {
  // 簡單計算：2+2
  const result = 2 + 2;
  
  return {
    statusCode: 200,
    body: JSON.stringify({ result: result })
  };
};
