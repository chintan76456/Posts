# Posts
Created with CodeSandbox

Requirement
create a list of posts with each post having an ability to show a button, which shows a list of comments on each click. 

List of Changes 
1. Create a React Component to hold a table of posts.
2. Posts should be consumed from the mock API https://dummyjson.com/posts.
3. Use Axios library to make API calls.
4. Log the error messages in the console.
5. Upon successful response, show the list of posts in a table component.
6. The table component should be dynamic.
7. Add a button for each post to show the list of comments associated with this post.
8. Use the same dynamic table component to show the comment details.
9. Upon selecting the see comments for a specific post, the scroll should be moved to the bottom of the page.
10. The comments table should be shown below the posts table.
11. It should change whenever user clicks a new post and it's associated data should be loaded.
12. Fetch the data for comments based on post id using this API https://dummyjson.com/posts/:postId/comments
13. Note: Both the posts, comments or any new table included should use the same table component and reuse it.

