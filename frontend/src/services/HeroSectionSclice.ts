import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface HeroDataType {
    swiperImages: string[],
    bannerImages: string[],
}

const initialState: HeroDataType = {
    swiperImages: [],
    bannerImages: [],
}

export const heroSlice = createSlice({
  name: 'HeroData',
  initialState,
  reducers: {
    // GetImageUrl : (state) => {
    //   const swiperImages = ['Swiper(1).jpg', 'Swiper(2).jpg'];
    //   const bannerImages = ['Banner(1).jpg', 'Banner(2).jpg'];
  
    //   async function getImagesUrl() {
    //     const SwiperImagesUrl = swiperImages.map(Img => {
    //       const { data } = supabase.storage
    //         .from('product-images')
    //         .getPublicUrl(Img);
    //       return data.publicUrl;
    //     });
  
    //     const bannerImagesUrl = bannerImages.map(Img => {
    //       const { data } = supabase.storage
    //         .from('product-images')
    //         .getPublicUrl(Img);
    //       return data.publicUrl;
    //     });
  
    //     return { SwiperImagesUrl, bannerImagesUrl };
    //   }
    //   getImagesUrl().then(data => {
    //     state.swiperImages = data.SwiperImagesUrl;
    //     state.bannerImages = data.bannerImagesUrl;
    //   });
    // }
  },
})

// Action creators are generated for each case reducer function
export const {  } = heroSlice.actions

export default heroSlice.reducer