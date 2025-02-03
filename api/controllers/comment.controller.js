import Comment from "../models/comment-model.js";

export const postComment = async (req, res) => {
    try {
        const { content, post } = req.body
        console.log("content is: ",req.body.content);
        console.log("author is: ",req.body.commentWriter);
        console.log("postId is: ",req.body.post);
        if (!content || !post) {
            return res.status(400).json({ error: "Content and postId are required" });
        }
        const comment = new Comment({
            content,
            commentWriter: req.body.commentWriter,
            post: post,
        });
        await comment.save()
        console.log(comment);
        res.status(200).json(comment)
    } catch (error) {
        console.log("failed to post comment: ", error)
        res.status(500).json({ error: error.message });
    }
}

export const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({ post: req.params.postId })
            .sort({ createdAt: -1 })
            .populate("commentWriter", "username profilePic")
        res.status(200).json({ success: true, data: comments })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId);
        if (!comment) return res.status(404).json({ error: "Comment not found" });

        if (comment.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({ error: "Unauthorized" });
        }

        await comment.deleteOne();
        res.json({ success: true, message: "Comment deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}