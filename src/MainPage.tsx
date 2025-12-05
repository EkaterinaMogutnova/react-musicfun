import { TrackDetail } from "./ui/TrackDetail";
import { TrackList } from "./ui/TrackList";
import { useTrackSelection } from "./bll/useTrackSelection";

export function MainPage() {
  const { trackId, setTrackId } = useTrackSelection();

  const handleTrackSelect = (id: string | null): void => {
    setTrackId(id);
  };
  return (
    <div>
      <h1></h1>
      <div style={{ display: "flex", gap: "40px" }}>
        <TrackList
          selectedTrackId={trackId}
          onTrackSelect={handleTrackSelect}
        />
        <TrackDetail trackId={trackId} />
      </div>
    </div>
  );
}
