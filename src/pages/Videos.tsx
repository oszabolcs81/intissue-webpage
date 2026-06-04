import { useState } from "react";
import Layout from "@/components/Layout";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Play } from "lucide-react";

type Video = { title: string; duration: string; src: string };

const animalVideos: Video[] = [
  { title: "Horse Sinus Teaser", duration: "01:30", src: "/videos/animal-horse-sinus-teaser.mp4" },
  { title: "TÁTI the Dog", duration: "01:24", src: "/videos/animal-t-ti-the-dog.mp4" },
  { title: "Shearing Injury Dog 2", duration: "00:50", src: "/videos/animal-management-of-shearing-injury-for-dog-2.mp4" },
  { title: "Shearing Injury Dog", duration: "00:30", src: "/videos/animal-management-of-shearing-injury-for-dog.mp4" },
  { title: "Tumor Treatment with RegBone", duration: "00:41", src: "/videos/animal-new-treatment-of-tumor-for-dog-with-regbone-in-mandible.mp4" },
];

const surgeryVideos: Video[] = [
  { title: "Dent Art", duration: "02:42", src: "/videos/surgery-dent-art.mp4" },
  { title: "Periodontology", duration: "00:38", src: "https://www.youtube.com/embed/6WEpBr0e54k" },
  { title: "Sinus Lift with RegBone", duration: "02:25", src: "https://www.youtube.com/embed/P-s9KuQraI0" },
  { title: "RegBone Making", duration: "00:58", src: "/videos/surgery-regbone-making.mp4" },
  { title: "Epulis with RegBone", duration: "00:25", src: "/videos/surgery-new-management-of-epulis-with-regbone.mp4" },
  { title: "Peri Implantitis", duration: "01:17", src: "/videos/surgery-management-of-peri-implantitis.mp4" },
  { title: "Vertical & Horizontal Augmentation", duration: "00:40", src: "/videos/surgery-vertical-and-horizontal-augmentation.mp4" },
  { title: "Extractio, Sofort GBR with RegBone3", duration: "01:05", src: "/videos/surgery-extractio-sofort-gbr-with-regbone3.mp4" },
  { title: "Sinus Lift - Lateral Approach with RegBone2", duration: "01:42", src: "/videos/surgery-sinus-lift-lateral-approach-with-regbone2.mp4" },
  { title: "Paradontology", duration: "01:05", src: "/videos/surgery-paradontology.mp4" },
  { title: "Augmentation with 3D Titan Mesh", duration: "00:40", src: "/videos/surgery-vertical-and-horizontal-augmentation-with-3d-titan-mesh.mp4" },
];

// Solid color tile — NO video thumbnail (some videos contain surgical content)
const Tile = ({
  video,
  colorClass,
  onPlay,
}: {
  video: Video;
  colorClass: string;
  onPlay: (v: Video) => void;
}) => (
  <button
    type="button"
    onClick={() => onPlay(video)}
    className={`group relative overflow-hidden rounded-sm aspect-video text-left border border-border/40 hover:border-foreground/30 transition-all ${colorClass}`}
    aria-label={`Play ${video.title}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/30" />
    <div className="relative h-full w-full p-5 flex flex-col justify-between">
      <div className="flex justify-end">
        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm bg-black/20 group-hover:bg-white/20 transition-all">
          <Play className="w-5 h-5 ml-0.5 text-white" />
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold text-white leading-tight drop-shadow">{video.title}</p>
        <p className="text-xs text-white/60 mt-1">{video.duration}</p>
      </div>
    </div>
  </button>
);

const Videos = () => {
  const [active, setActive] = useState<Video | null>(null);
  return (
    <Layout>
      <section className="py-10 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Videos</h1>
        <p className="text-primary italic text-sm md:text-base max-w-2xl mx-auto">
          Be Aware! On this page you may find videos suitable for disturbing peace, please treat your child accordingly.
        </p>
      </section>

      {/* Animal Treatment */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline justify-between mb-8 border-b border-border pb-3">
            <h2 className="text-2xl md:text-3xl font-semibold">Animal Treatment</h2>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">{animalVideos.length} videos</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {animalVideos.map((v) => (
              <Tile key={v.src} video={v} colorClass="bg-red-950" onPlay={setActive} />
            ))}
          </div>
        </div>
      </section>

      {/* Human Surgery */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline justify-between mb-8 border-b border-border pb-3">
            <h2 className="text-2xl md:text-3xl font-semibold">Human Surgery</h2>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">{surgeryVideos.length} videos</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {surgeryVideos.map((v) => (
              <Tile key={v.src} video={v} colorClass="bg-blue-950" onPlay={setActive} />
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black border-border overflow-hidden">
          <DialogTitle className="sr-only">{active?.title ?? "Video"}</DialogTitle>
          {active && (
            active.src.startsWith("https://") ? (
              <iframe
                key={active.src}
                src={`${active.src}?autoplay=1`}
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full aspect-video bg-black border-0"
              />
            ) : (
              <video
                key={active.src}
                src={active.src}
                controls
                autoPlay
                playsInline
                className="w-full aspect-video bg-black"
              />
            )
          )}
          {active && (
            <div className="px-4 py-3 bg-background">
              <p className="font-medium">{active.title}</p>
              <p className="text-xs text-muted-foreground">{active.duration}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Videos;
