import Posts from '../models/post-model.js';

export const getTags = async (req, res) => {
    try {
      const tags = await Posts.aggregate([
        { $unwind: '$tags' },
        { $group: { _id: '$tags', count: { $sum: 1 } } }, // Adding a count
        { $project: { _id: 0, tag: '$_id', count: 1 } }, // Including count in the result
      ]);
  
      // const uniqueTags = tags.map((item) => item.tag);
      // console.log(unique);
      
      res.status(200).json({
        success: true,
        tags: tags,
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }