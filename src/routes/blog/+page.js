export const load = async ({ fetch }) => {
    const response = await fetch("https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clajji1v52wt701t67t8g8i7q/master", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `{
                    posts {
                      highlightImage {
                        url
                      }
                      title
                      intro
                      content {
                        html
                      }
                    } 
                  }`,
        }),
      });

      const { data } = await response.json();

      return data;
}