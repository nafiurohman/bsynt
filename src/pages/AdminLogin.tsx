import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Terminal, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import authData from "@/data/auth.json";

const ADMIN_BASE = "/admin/e8f4a7b9c2d1e6f3a4b8c9d2e1f6a7b9";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === authData.username && password === authData.password) {
      sessionStorage.setItem("admin_auth", "true");
      navigate(`${ADMIN_BASE}/dashboard`);
    } else {
      setError("Username atau password salah!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
          <Terminal className="h-10 w-10 text-primary mx-auto glow-green" />
          <h1 className="text-2xl font-bold font-mono text-primary">Admin CMS</h1>
          <p className="text-sm text-muted-foreground">Login untuk mengelola konten dokumentasi</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 p-6 rounded-lg border border-border bg-card">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Username</label>
            <Input
              value={username}
              onChange={(e) => { setUsername(e.target.value); setError(""); }}
              placeholder="admin"
              className="font-mono"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              placeholder="••••••••"
              className="font-mono"
            />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" className="w-full gap-2">
            <LogIn className="h-4 w-4" /> Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
