import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLang } from "@/lib/i18n";
import friendlyDental from "@/assets/projects/friendly-dental.jpg";
import liveAtHeadwater from "@/assets/projects/live-at-headwater.jpg";
import btnRealEstate from "@/assets/projects/btn-real-estate.jpg";
import nueranutra from "@/assets/projects/nuera-nutra.jpg";
import vitaEnvironmental from "@/assets/projects/vita-environmental.jpg";
import spaAlita from "@/assets/projects/spa-alita.jpg";
import presotea from "@/assets/projects/presotea.jpg";
import hsinhsinArt from "@/assets/projects/hsin-hsin-art-framing.jpg";
import sonykunDesign from "@/assets/projects/sonykun-design.jpg";
import kchenConstruction from "@/assets/projects/kchen-construction.jpg";
import helenLam from "@/assets/projects/helen-lam-real-estate.jpg";
import calinClub from "@/assets/projects/calin-club.jpg";

const projectImages: Record<string, string> = {
  "friendly-dental": friendlyDental,
  "live-at-headwater": liveAtHeadwater,
  "btn-real-estate": btnRealEstate,
  "nuera-nutra": nueranutra,
  "vita-environmental": vitaEnvironmental,
  "spa-alita": spaAlita,
  "presotea": presotea,
  "hsin-hsin-art-framing": hsinhsinArt,
  "sonykun-design": sonykunDesign,
  "kchen-construction": kchenConstruction,
  "helen-lam-real-estate": helenLam,
  "calin-club": calinClub,
};

const RevealDiv = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useScrollReveal<HTMLDivElement>({ delay });
  return <div ref={ref}>{children}</div>;
};

const Work = () => {
  const { t } = useLang();

  return (
    <div>
      <section className="section-border">
        <div className="section-container py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold">{t("work.title")}</h1>
          <p className="mt-4 text-muted-foreground max-w-xl">
            {t("work.intro")}
          </p>
        </div>
      </section>
      <section>
        <div className="section-container section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <RevealDiv key={project.slug} delay={i * 80}>
                <ProjectCard
                  project={project}
                  imageImport={projectImages[project.slug]}
                  mode="live"
                />
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
