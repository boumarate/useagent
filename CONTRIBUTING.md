// Sketch of the UI integration in session-thread-actions.tsx
import { Share2, Link, Trash2, Check } from 'lucide-react';
// ... existing imports

export function SessionThreadActions({ runId }: { runId: string }) {
  const [shareToken, setShareToken] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCreateShare = async () => {
    const res = await api.post(`/runs/${runId}/share`);
    setShareToken(res.data.token);
  };

  const handleRevokeShare = async () => {
    await api.delete(`/runs/${runId}/share`);
    setShareToken(null);
  };

  const shareUrl = `${window.location.origin}/share/${shareToken}`;

  return (
    <div className="flex items-center gap-2">
      {/* Existing export buttons */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            <Share2 className="w-4 h-4 mr-2" /> Share
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-4">
            <h4 className="font-medium leading-none">Share Thread</h4>
            <p className="text-sm text-muted-foreground">
              Create a read-only link to share this conversation and its output.
            </p>
            {shareToken ? (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Input readOnly value={shareUrl} className="text-xs" />
                  <Button size="icon" variant="outline" onClick={() => {
                    navigator.clipboard.writeText(shareUrl);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}>
                    {copied ? <Check className="w-4 h-4" /> : <Link className="w-4 h-4" />}
                  </Button>
                </div>
                <Button variant="destructive" size="sm" className="w-full" onClick={handleRevokeShare}>
                  <Trash2 className="w-4 h-4 mr-2" /> Revoke Link
                </Button>
              </div>
            ) : (
              <Button className="w-full" onClick={handleCreateShare}>
                Create Share Link
              </Button>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}