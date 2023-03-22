import type {NextPage} from "next";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { Text, Textarea, Grid, Button } from "@nextui-org/react";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import { useState, useEffect } from "react";
import { Database } from '@/types/supabase';

// localhost:3000/editArticle?id=1 -> only owner can edit an article)
// we dont want to start with an empty title and content
// we want start with article title and content

 const EditArticle: NextPage = () => {
    const supabaseClient = useSupabaseClient<Database>();
    const user = useUser();
    const router = useRouter();
    const { id } = router.query;

    type ArticleData = Database["public"]["Tables"]["articles"]["Row"];

    type TitleContent = {
        title: string,
        content: string
    }

    const initialState: TitleContent = {
      title: "",
      content: ""
    }

    const [articleData, setArticleData] = useState(initialState);

    const handleChange = (e: any) => {
      setArticleData({...articleData, [e.target.name] : e.target.value })
    }

    useEffect( () => {
        async function getArticle() {
            const {data, error} = await supabaseClient
                .from("articles")
                .select("*")
                .filter("id", "eq", id)
                .single(); 
            
            if (error) {
                console.log(error);
            }    
            else {
                if (data != null) {
                    const newArticalContent: TitleContent = {
                        title: data.title!,
                        content: data.content!
                    }
                    
                    console.log(newArticalContent);

                    setArticleData(newArticalContent);
                }
            }
        }

        if (typeof id !== "undefined") {
            getArticle();
        }
   }, [id, supabaseClient]); // odpala sie gdy id sie zmienia


    const editArticle = async () => {
      try {
          const {data, error } = await supabaseClient
              .from("articles")
              .update (
                {
                  title: articleData.title,
                  content: articleData.content
                }
              ).eq("id", id);
          
          if (error) throw error;
          router.push("/article?id=" + id);
      } catch (error: any) {
        alert(error.message);
      }
    }

    //console.log(articleData);

    return (
        <Grid.Container gap={1}>
          <Text h3>Title</Text>
          <Grid xs={12}>
            <Textarea
                name="title"
                aria-label="title"
                placeholder="Article Title"
                fullWidth={true}
                rows={1}
                size="xl"
                onChange={handleChange}
                initialValue = {articleData.title}
            />
          </Grid>
          <Text h3>Article Text</Text>
          <Grid xs={12}>
            <Textarea
                name="content"
                aria-label="content"
                placeholder="Article content"
                fullWidth={true}
                rows={6}
                size="xl"
                onChange={handleChange}
                initialValue = {articleData.content} 
            />
          </Grid>
          <Grid xs={12}>
            <Text>Editing as {user?.email}</Text>
          </Grid>
          <Button onPress={editArticle}>Update Article</Button>
        </Grid.Container>
    )    
 }

export default EditArticle; 

export const getServerSideProps = withPageAuth({ redirectTo: "/login" })