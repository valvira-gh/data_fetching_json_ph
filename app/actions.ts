"use server";

import { revalidatePath } from "next/cache"; ()

export default async function action() {
    revalidatePath("collection");
}











































// import axios from 'axios';

// export async function getServerSideProps(context: any): Promise<{} | undefined> {
//     const res = await axios.get('api/endpoint');
//     const data = res.data;

//     if (!data) {
//         return {
//             notFound: true,
//         }
//     }

//     // Add a return statement here
//     return {
//         props: { data }, // will be passed to the page component as props
//     };
// }


// export async function getStaticProps(context: any): Promise<{} | undefined> {
//     const res = await axios.get('api/');
//     const data = res.data;

//     return {
//         props: { data }, // will be passed to the page component as props
//     };
// }


// export async function getStaticPaths() {
//     return {
//         paths: [
//             { params: { id: '1' } },
//             { params: { id: '2' } }
//         ],
//         fallback: true
//     };
// }
