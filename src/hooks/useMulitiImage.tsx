import { useState } from 'react';

interface ImgListType {
  id: number;
  imgSrc: string;
  fileName: string;
  createdAt: number;
}

export default function useMulitiImage() {
  const [imgList, setImgList] = useState<ImgListType[]>([]);

  const onImgPlus = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (imgList.length >= 5) {
      return '이미지는 최대 5개까지 등록이 가능합니다.';
    }

    if (!e.target.files) return;
    const file = e.target.files[0];

    if (!file) {
      return;
    }
    if (file.size > 3000001) {
      return '3MB 이하의 파일만 등록할 수 있습니다.';
    }

    const fr = new FileReader();

    if (!e.target.files) {
      return '적절한 파일을 선택해주세요.';
    }
    fr.readAsDataURL(e.target.files[0]);
    fr.onload = () => {
      if (typeof fr.result === 'string') {
        setImgList((prev: any) => [
          ...prev,
          {
            id: imgList.length + 1,
            imgSrc: fr.result,
            fileName: file.name,
            createdAt: Date.now(),
          },
        ]);
      }
    };
  };

  const onDeleteImg = (id: number) => {
    setImgList(imgList.filter((v: ImgListType, i: number) => v.id !== id));
  };

  return [imgList, onImgPlus, onDeleteImg, setImgList];
}
