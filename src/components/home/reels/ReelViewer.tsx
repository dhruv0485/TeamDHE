import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Share2, X, Play, ChevronLeft, ChevronRight, Bookmark } from 'lucide-react';
import { Reel } from '../types';

interface ReelViewerProps {
  reel: Reel;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const ReelViewer = ({ reel, onClose, onPrevious, onNext, isFirst, isLast }: ReelViewerProps) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);
  const [comment, setComment] = React.useState('');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
    >
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 
          transition-colors duration-200"
      >
        <X className="h-6 w-6 text-white" />
      </motion.button>

      {/* Navigation Buttons */}
      {!isFirst && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={onPrevious}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full
            bg-white/10 hover:bg-white/20 transition-all duration-200"
        >
          <ChevronLeft className="h-8 w-8 text-white" />
        </motion.button>
      )}

      {!isLast && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={onNext}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full
            bg-white/10 hover:bg-white/20 transition-all duration-200"
        >
          <ChevronRight className="h-8 w-8 text-white" />
        </motion.button>
      )}

      <div className="relative w-full max-w-6xl h-[80vh] flex gap-8">
        {/* Video Section */}
        <div className="flex-1 relative rounded-3xl overflow-hidden bg-gray-900">
          <img 
            src={reel.thumbnail} 
            alt={reel.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Play Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
              w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center
              border-2 border-white/50 hover:bg-white/30 transition-colors duration-200"
          >
            <Play className="h-10 w-10 text-white" fill="white" />
          </motion.button>

          {/* Bottom Controls */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-full ${isLiked ? 'bg-rose-500' : 'bg-white/10'} 
                  backdrop-blur-sm hover:bg-white/20 transition-colors`}
              >
                <Heart className={`h-6 w-6 ${isLiked ? 'text-white fill-current' : 'text-white'}`} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="h-6 w-6 text-white" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <Share2 className="h-6 w-6 text-white" />
              </motion.button>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSaved(!isSaved)}
              className={`p-2 rounded-full ${isSaved ? 'bg-blue-500' : 'bg-white/10'} 
                backdrop-blur-sm hover:bg-white/20 transition-colors`}
            >
              <Bookmark className={`h-6 w-6 ${isSaved ? 'text-white fill-current' : 'text-white'}`} />
            </motion.button>
          </div>
        </div>

        {/* Info Section */}
        <div className="w-96 flex flex-col text-white">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
            <div>
              <h3 className="font-semibold">{reel.author}</h3>
              <p className="text-sm text-gray-400">{reel.category}</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">{reel.title}</h2>
          
          <div className="flex space-x-6 mb-8">
            <div className="flex items-center space-x-2">
              <Heart className={`h-6 w-6 ${isLiked ? 'text-rose-500 fill-current' : ''}`} />
              <span>{reel.likes}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-6 w-6" />
              <span>{reel.comments}</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-sm text-gray-300">
                  This is amazing content! Really helpful for my daily routine. 🙌
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-sm text-gray-300">
                  Thanks for sharing these valuable tips! 💪
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 relative">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full bg-white/10 rounded-full py-3 px-6 text-white placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500
              hover:text-blue-400 transition-colors">
              Post
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReelViewer;