import { motion } from 'framer-motion';

const desktopAvatars = [
  { id: 1, top: '8%',   left: '2%',    size: 75,  img: 'https://i.pravatar.cc/150?u=a042581f4e29026024d' },
  { id: 2, top: '45%',  left: '-1%',   size: 60,  img: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
  { id: 3, top: '75%',  left: '6%',    size: 90,  img: 'https://i.pravatar.cc/150?u=a04258a2462d826712d' },
  { id: 4, top: '8%',   right: '2%',   size: 82,  img: 'https://i.pravatar.cc/150?u=a048581f4e29026701d' },
  { id: 5, top: '42%',  right: '-1%',  size: 68,  img: 'https://i.pravatar.cc/150?u=a042581f4e29026702d' },
  { id: 6, top: '70%',  right: '4%',   size: 135, img: 'https://i.pravatar.cc/150?u=a042581f4e29026703d' },
];

const tabletAvatars = [
  { id: 1, top: '10%',  left: '1%',   size: 68,  img: 'https://i.pravatar.cc/150?u=a042581f4e29026024d' },
  { id: 2, top: '48%',  left: '0%',   size: 54,  img: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
  { id: 3, top: '78%',  left: '4%',   size: 64,  img: 'https://i.pravatar.cc/150?u=a04258a2462d826712d' },
  { id: 4, top: '10%',  right: '2%',  size: 68,  img: 'https://i.pravatar.cc/150?u=a048581f4e29026701d' },
  { id: 5, top: '45%',  right: '0%',  size: 58,  img: 'https://i.pravatar.cc/150?u=a042581f4e29026702d' },
  { id: 6, top: '76%',  right: '2%',  size: 80,  img: 'https://i.pravatar.cc/150?u=a042581f4e29026703d' },
];

type Avatar = { id: number; top: string; left?: string; right?: string; size: number; img: string };

const AvatarLayer = ({ avatars }: { avatars: Avatar[] }) => (
  <>
    {avatars.map((avatar, index) => (
      <motion.div
        key={avatar.id}
        className="absolute rounded-full overflow-hidden border-[3px] border-white shadow-lg pointer-events-auto cursor-pointer"
        style={{
          top: avatar.top,
          left: avatar.left,
          right: avatar.right,
          width: avatar.size,
          height: avatar.size,
        }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', bounce: 0.4 }}
        whileHover={{ scale: 1.1, y: -5 }}
      >
        <img src={avatar.img} alt={`Customer ${avatar.id}`} className="w-full h-full object-cover" />
      </motion.div>
    ))}
  </>
);

const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 text-center">
      <motion.h2
        className="font-new-gerbil text-[clamp(1.8rem,4vw,3rem)] leading-tight tracking-tight mb-10 sm:mb-14 lg:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="highlight-green">What</span> our customer
        <br />
        says <span className="underline-orange">About Us</span>
      </motion.h2>

      <div className="relative max-w-5xl mx-auto md:py-10 lg:py-14">
        <motion.div
          className="relative bg-footer-green rounded-2xl sm:rounded-3xl px-6 py-10 sm:px-10 sm:py-14 md:px-16 max-w-xl mx-auto z-10 overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="absolute top-0 left-2 text-[6rem] sm:text-[7rem] leading-none text-gray-400 font-serif opacity-30 select-none pointer-events-none">
            &ldquo;
          </span>
          <span className="absolute bottom-0 right-2 text-[6rem] sm:text-[7rem] leading-none text-gray-400 font-serif opacity-30 rotate-180 select-none pointer-events-none">
            &ldquo;
          </span>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed font-medium text-gray-800 relative z-10">
            Elementum delivered the site within the timeline we had requested. In the end, the
            client found a 125% increase in traffic within days since its launch. They also had
            an impressive ability to quickly minimize the company has invested, which have also
            proved to be easy to use and reliable.
          </p>
        </motion.div>

        <div className="absolute inset-0 pointer-events-none hidden md:block lg:hidden z-20">
          <AvatarLayer avatars={tabletAvatars} />
        </div>
        <div className="absolute inset-0 pointer-events-none hidden lg:block z-20">
          <AvatarLayer avatars={desktopAvatars} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
