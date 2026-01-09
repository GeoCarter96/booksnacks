import './book.css'
import BookClient from './BookClient';
import ForYou from '@/app/for-you/page'



interface Product {
id: string;
author: string;
title: string;
subTitle: string;
imageLink: string;
audioLink: string;
totalRating: number;
averageRating: number;
keyIdeas: number;
type: string;
status: string;
subscriptionRequired: Boolean;
summary: string;
tags: string[];
bookDescription: string;
authorDescription: string;


}

export default async function page ({params,}: {params:Promise<{id: string}>})
{const { id } = await params;

const res = await fetch(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,{
  next: { revalidate: 60} });

  if (!res.ok) return <div>Product Not Found</div>
  const product: Product = await res.json();
  return <BookClient product={product}/>;
  //return <ForYou product={product}/>;
}
  


