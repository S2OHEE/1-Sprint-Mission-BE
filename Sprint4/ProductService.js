import axios from 'axios';

const baseUrl = "https://sprint-mission-api.vercel.app/products";

export async function getProductList(page, pageSize, keyword) {
    const URL = `${baseUrl}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
    try {
      const { data } = await axios.get(URL);
      return console.log('상품 리스트를 가져왔습니다.',data);
    } catch (error) {
      console.error(`Error: ${error}`);
      throw error;
    }
}

export async function getProduct(id) {
    const URL = `${baseUrl}/${id}`;
    try {
        const {data} = await axios.get(URL);
        return console.log('상품 정보를 가져왔습니다.',data);
    } catch (error) {
        console.error(`Error: ${error}`);
        throw error;
    }
}

export async function createProduct(product) {

    try {
      const {data} = await axios.post(baseUrl,
        {
        name: product.name,
        description: product.description,
        price: product.price,
        tags: product.tags,
        images: product.images
        }
      );
      return console.log('새로운 상품이 추가되었습니다.', data);
    } catch (error) {
      console.error(`Error : ${error}`);
      throw error;
    }
  }

export async function patchProduct(id, Product) {
    const URL = `${baseUrl}/${id}`;
  
    try {
      const {data} = await axios.patch(URL, Product);
      return console.log('상품 업데이트가 완료되었습니다.',data);
    } catch (error) {
      console.error(`Error : ${error}`);
      throw error;
    }
}

export async function deleteProduct(id) {
    const URL = `${baseUrl}/${id}`;
  
    try {
      const {data} = await axios.delete(URL);
      return console.log('삭제가 완료되았습니다.',data);
    } catch (error) {
      console.error(`Error : ${error}`);
      throw error;
    }
  }