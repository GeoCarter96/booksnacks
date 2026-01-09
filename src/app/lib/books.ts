export interface Product {
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

export async function getBook(id: string, revalidate = 60): Promise<Product> {
    const res = await fetch(
        `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
        {next: { revalidate } }
    );
    if (!res.ok) {
        throw new Error(`Failed to fetch book ${id}`);
    }
    return res.json();
}

export async function getBooks(ids: string[], revalidate = 60): Promise<Product[]> {
    return Promise.all(ids.map((id) => getBook(id, revalidate)));
}