import { useParams, Navigate } from "react-router-dom";
import DocsLayout from "@/components/DocsLayout";
import CommandSection from "@/components/CommandSection";
import { ShareButton } from "@/components/ShareButton";
import type { DocsPage as DocsPageType } from "@/types/docs";

// Linux JSON data
import navigasiDasar from "@/data/navigasi-dasar.json";
import fileManagement from "@/data/file-management.json";
import fileViewing from "@/data/file-viewing.json";
import filePermission from "@/data/file-permission.json";
import fileSearch from "@/data/file-search.json";
import textProcessing from "@/data/text-processing.json";
import compression from "@/data/compression.json";
import diskStorage from "@/data/disk-storage.json";
import processManagement from "@/data/process-management.json";
import userManagement from "@/data/user-management.json";
import network from "@/data/network.json";
import systemInfo from "@/data/system-info.json";
import serviceSystemd from "@/data/service-systemd.json";
import packageApt from "@/data/package-apt.json";
import packageDnf from "@/data/package-dnf.json";
import packagePacman from "@/data/package-pacman.json";
import redirectionPipe from "@/data/redirection-pipe.json";
import shellScripting from "@/data/shell-scripting.json";
import tipsShortcut from "@/data/tips-shortcut.json";

// Windows JSON data
import winNavigasiDasar from "@/data/win-navigasi-dasar.json";
import winFileManagement from "@/data/win-file-management.json";
import winFileViewing from "@/data/win-file-viewing.json";
import winFilePermission from "@/data/win-file-permission.json";
import winFileSearch from "@/data/win-file-search.json";
import winTextProcessing from "@/data/win-text-processing.json";
import winCompression from "@/data/win-compression.json";
import winDiskStorage from "@/data/win-disk-storage.json";
import winProcessManagement from "@/data/win-process-management.json";
import winUserManagement from "@/data/win-user-management.json";
import winNetwork from "@/data/win-network.json";
import winSystemInfo from "@/data/win-system-info.json";
import winService from "@/data/win-service.json";
import winPackage from "@/data/win-package.json";
import winRedirectionPipe from "@/data/win-redirection-pipe.json";
import winScripting from "@/data/win-scripting.json";
import winTipsShortcut from "@/data/win-tips-shortcut.json";
import winRegistry from "@/data/win-registry.json";
import winRemote from "@/data/win-remote.json";

// macOS JSON data
import macNavigasiDasar from "@/data/mac-navigasi-dasar.json";
import macFileManagement from "@/data/mac-file-management.json";
import macFileViewing from "@/data/mac-file-viewing.json";
import macFilePermission from "@/data/mac-file-permission.json";
import macFileSearch from "@/data/mac-file-search.json";
import macTextProcessing from "@/data/mac-text-processing.json";
import macCompression from "@/data/mac-compression.json";
import macDiskStorage from "@/data/mac-disk-storage.json";
import macProcessManagement from "@/data/mac-process-management.json";
import macNetwork from "@/data/mac-network.json";
import macSystemInfo from "@/data/mac-system-info.json";
import macService from "@/data/mac-service.json";
import macPackage from "@/data/mac-package.json";
import macScripting from "@/data/mac-scripting.json";
import macTipsShortcut from "@/data/mac-tips-shortcut.json";

// MySQL JSON data
import mysqlDatabase from "@/data/mysql-database.json";
import mysqlTable from "@/data/mysql-table.json";
import mysqlDataTypes from "@/data/mysql-data-types.json";
import mysqlCrud from "@/data/mysql-crud.json";
import mysqlJoins from "@/data/mysql-joins.json";
import mysqlSubquery from "@/data/mysql-subquery.json";
import mysqlIndex from "@/data/mysql-index.json";
import mysqlViews from "@/data/mysql-views.json";
import mysqlStoredProcedure from "@/data/mysql-stored-procedure.json";
import mysqlFunctions from "@/data/mysql-functions.json";
import mysqlTriggers from "@/data/mysql-triggers.json";
import mysqlUserManagement from "@/data/mysql-user-management.json";
import mysqlBackup from "@/data/mysql-backup.json";
import mysqlStringFunctions from "@/data/mysql-string-functions.json";
import mysqlDateFunctions from "@/data/mysql-date-functions.json";
import mysqlAggregate from "@/data/mysql-aggregate.json";
import mysqlWindowFunctions from "@/data/mysql-window-functions.json";
import mysqlTransactions from "@/data/mysql-transactions.json";
import mysqlConstraints from "@/data/mysql-constraints.json";
import mysqlPerformance from "@/data/mysql-performance.json";

// PostgreSQL JSON data
import pgDatabase from "@/data/pg-database.json";
import pgTable from "@/data/pg-table.json";
import pgDataTypes from "@/data/pg-data-types.json";
import pgCrud from "@/data/pg-crud.json";
import pgJoins from "@/data/pg-joins.json";
import pgSubquery from "@/data/pg-subquery.json";
import pgIndex from "@/data/pg-index.json";
import pgViews from "@/data/pg-views.json";
import pgFunctions from "@/data/pg-functions.json";
import pgTriggers from "@/data/pg-triggers.json";
import pgUserManagement from "@/data/pg-user-management.json";
import pgBackup from "@/data/pg-backup.json";
import pgStringFunctions from "@/data/pg-string-functions.json";
import pgDateFunctions from "@/data/pg-date-functions.json";
import pgAggregate from "@/data/pg-aggregate.json";
import pgWindowFunctions from "@/data/pg-window-functions.json";
import pgTransactions from "@/data/pg-transactions.json";
import pgConstraints from "@/data/pg-constraints.json";
import pgPerformance from "@/data/pg-performance.json";
import pgJsonFunctions from "@/data/pg-json-functions.json";

// Git JSON data
import gitConfig from "@/data/git-config.json";
import gitInitClone from "@/data/git-init-clone.json";
import gitStatusLog from "@/data/git-status-log.json";
import gitStagingCommit from "@/data/git-staging-commit.json";
import gitBranching from "@/data/git-branching.json";
import gitMergeRebase from "@/data/git-merge-rebase.json";
import gitRemote from "@/data/git-remote.json";
import gitUndoReset from "@/data/git-undo-reset.json";
import gitStash from "@/data/git-stash.json";
import gitTag from "@/data/git-tag.json";
import gitInspectDebug from "@/data/git-inspect-debug.json";
import gitSubmodule from "@/data/git-submodule.json";
import gitAdvanced from "@/data/git-advanced.json";

// Docker JSON data
import dockerContainer from "@/data/docker-container.json";
import dockerImage from "@/data/docker-image.json";
import dockerVolume from "@/data/docker-volume.json";
import dockerNetwork from "@/data/docker-network.json";
import dockerCompose from "@/data/docker-compose.json";
import dockerAdvanced from "@/data/docker-advanced.json";

// Redis JSON data
import redisBasics from "@/data/redis-basics.json";
import redisString from "@/data/redis-string.json";
import redisList from "@/data/redis-list.json";
import redisHash from "@/data/redis-hash.json";
import redisSet from "@/data/redis-set.json";
import redisKeys from "@/data/redis-keys.json";
import redisAdvanced from "@/data/redis-advanced.json";

// Pentest JSON data
import pentestNetworking from "@/data/pentest-networking.json";
import pentestNmap from "@/data/pentest-nmap.json";
import pentestOsint from "@/data/pentest-osint.json";
import pentestMetasploit from "@/data/pentest-metasploit.json";
import pentestBurp from "@/data/pentest-burp.json";
import pentestPassword from "@/data/pentest-password.json";
import pentestWebTools from "@/data/pentest-web-tools.json";
import pentestFileAnalysis from "@/data/pentest-file-analysis.json";
import pentestPrivilege from "@/data/pentest-privilege.json";

const docsMap: Record<string, DocsPageType> = {
  // Linux
  "navigasi-dasar": navigasiDasar as DocsPageType,
  "file-management": fileManagement as DocsPageType,
  "file-viewing": fileViewing as DocsPageType,
  "file-permission": filePermission as DocsPageType,
  "file-search": fileSearch as DocsPageType,
  "text-processing": textProcessing as DocsPageType,
  "compression": compression as DocsPageType,
  "disk-storage": diskStorage as DocsPageType,
  "process-management": processManagement as DocsPageType,
  "user-management": userManagement as DocsPageType,
  "network": network as DocsPageType,
  "system-info": systemInfo as DocsPageType,
  "service-systemd": serviceSystemd as DocsPageType,
  "package-apt": packageApt as DocsPageType,
  "package-dnf": packageDnf as DocsPageType,
  "package-pacman": packagePacman as DocsPageType,
  "redirection-pipe": redirectionPipe as DocsPageType,
  "shell-scripting": shellScripting as DocsPageType,
  "tips-shortcut": tipsShortcut as DocsPageType,
  // Windows
  "win-navigasi-dasar": winNavigasiDasar as DocsPageType,
  "win-file-management": winFileManagement as DocsPageType,
  "win-file-viewing": winFileViewing as DocsPageType,
  "win-file-permission": winFilePermission as DocsPageType,
  "win-file-search": winFileSearch as DocsPageType,
  "win-text-processing": winTextProcessing as DocsPageType,
  "win-compression": winCompression as DocsPageType,
  "win-disk-storage": winDiskStorage as DocsPageType,
  "win-process-management": winProcessManagement as DocsPageType,
  "win-user-management": winUserManagement as DocsPageType,
  "win-network": winNetwork as DocsPageType,
  "win-system-info": winSystemInfo as DocsPageType,
  "win-service": winService as DocsPageType,
  "win-package": winPackage as DocsPageType,
  "win-redirection-pipe": winRedirectionPipe as DocsPageType,
  "win-scripting": winScripting as DocsPageType,
  "win-tips-shortcut": winTipsShortcut as DocsPageType,
  "win-registry": winRegistry as DocsPageType,
  "win-remote": winRemote as DocsPageType,
  // macOS
  "mac-navigasi-dasar": macNavigasiDasar as DocsPageType,
  "mac-file-management": macFileManagement as DocsPageType,
  "mac-file-viewing": macFileViewing as DocsPageType,
  "mac-file-permission": macFilePermission as DocsPageType,
  "mac-file-search": macFileSearch as DocsPageType,
  "mac-text-processing": macTextProcessing as DocsPageType,
  "mac-compression": macCompression as DocsPageType,
  "mac-disk-storage": macDiskStorage as DocsPageType,
  "mac-process-management": macProcessManagement as DocsPageType,
  "mac-network": macNetwork as DocsPageType,
  "mac-system-info": macSystemInfo as DocsPageType,
  "mac-service": macService as DocsPageType,
  "mac-package": macPackage as DocsPageType,
  "mac-scripting": macScripting as DocsPageType,
  "mac-tips-shortcut": macTipsShortcut as DocsPageType,
  // MySQL
  "mysql-database": mysqlDatabase as DocsPageType,
  "mysql-table": mysqlTable as DocsPageType,
  "mysql-data-types": mysqlDataTypes as DocsPageType,
  "mysql-crud": mysqlCrud as DocsPageType,
  "mysql-joins": mysqlJoins as DocsPageType,
  "mysql-subquery": mysqlSubquery as DocsPageType,
  "mysql-index": mysqlIndex as DocsPageType,
  "mysql-views": mysqlViews as DocsPageType,
  "mysql-stored-procedure": mysqlStoredProcedure as DocsPageType,
  "mysql-functions": mysqlFunctions as DocsPageType,
  "mysql-triggers": mysqlTriggers as DocsPageType,
  "mysql-user-management": mysqlUserManagement as DocsPageType,
  "mysql-backup": mysqlBackup as DocsPageType,
  "mysql-string-functions": mysqlStringFunctions as DocsPageType,
  "mysql-date-functions": mysqlDateFunctions as DocsPageType,
  "mysql-aggregate": mysqlAggregate as DocsPageType,
  "mysql-window-functions": mysqlWindowFunctions as DocsPageType,
  "mysql-transactions": mysqlTransactions as DocsPageType,
  "mysql-constraints": mysqlConstraints as DocsPageType,
  "mysql-performance": mysqlPerformance as DocsPageType,
  // PostgreSQL
  "pg-database": pgDatabase as DocsPageType,
  "pg-table": pgTable as DocsPageType,
  "pg-data-types": pgDataTypes as DocsPageType,
  "pg-crud": pgCrud as DocsPageType,
  "pg-joins": pgJoins as DocsPageType,
  "pg-subquery": pgSubquery as DocsPageType,
  "pg-index": pgIndex as DocsPageType,
  "pg-views": pgViews as DocsPageType,
  "pg-functions": pgFunctions as DocsPageType,
  "pg-triggers": pgTriggers as DocsPageType,
  "pg-user-management": pgUserManagement as DocsPageType,
  "pg-backup": pgBackup as DocsPageType,
  "pg-string-functions": pgStringFunctions as DocsPageType,
  "pg-date-functions": pgDateFunctions as DocsPageType,
  "pg-aggregate": pgAggregate as DocsPageType,
  "pg-window-functions": pgWindowFunctions as DocsPageType,
  "pg-transactions": pgTransactions as DocsPageType,
  "pg-constraints": pgConstraints as DocsPageType,
  "pg-performance": pgPerformance as DocsPageType,
  "pg-json-functions": pgJsonFunctions as DocsPageType,
  // Git
  "git-config": gitConfig as DocsPageType,
  "git-init-clone": gitInitClone as DocsPageType,
  "git-status-log": gitStatusLog as DocsPageType,
  "git-staging-commit": gitStagingCommit as DocsPageType,
  "git-branching": gitBranching as DocsPageType,
  "git-merge-rebase": gitMergeRebase as DocsPageType,
  "git-remote": gitRemote as DocsPageType,
  "git-undo-reset": gitUndoReset as DocsPageType,
  "git-stash": gitStash as DocsPageType,
  "git-tag": gitTag as DocsPageType,
  "git-inspect-debug": gitInspectDebug as DocsPageType,
  "git-submodule": gitSubmodule as DocsPageType,
  "git-advanced": gitAdvanced as DocsPageType,
  // Docker
  "docker-container": dockerContainer as DocsPageType,
  "docker-image": dockerImage as DocsPageType,
  "docker-volume": dockerVolume as DocsPageType,
  "docker-network": dockerNetwork as DocsPageType,
  "docker-compose": dockerCompose as DocsPageType,
  "docker-advanced": dockerAdvanced as DocsPageType,
  // Redis
  "redis-basics": redisBasics as DocsPageType,
  "redis-string": redisString as DocsPageType,
  "redis-list": redisList as DocsPageType,
  "redis-hash": redisHash as DocsPageType,
  "redis-set": redisSet as DocsPageType,
  "redis-keys": redisKeys as DocsPageType,
  "redis-advanced": redisAdvanced as DocsPageType,
  // Pentest
  "pentest-networking": pentestNetworking as DocsPageType,
  "pentest-nmap": pentestNmap as DocsPageType,
  "pentest-osint": pentestOsint as DocsPageType,
  "pentest-metasploit": pentestMetasploit as DocsPageType,
  "pentest-burp": pentestBurp as DocsPageType,
  "pentest-password": pentestPassword as DocsPageType,
  "pentest-web-tools": pentestWebTools as DocsPageType,
  "pentest-file-analysis": pentestFileAnalysis as DocsPageType,
  "pentest-privilege": pentestPrivilege as DocsPageType,
};

export { docsMap };

const DocsPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? docsMap[slug] : null;

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <DocsLayout>
      <div className="space-y-6">
        <div className="space-y-2 pb-4 border-b border-border">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div className="flex items-center gap-3 flex-1">
              <h1 className="text-2xl md:text-3xl font-bold font-mono text-primary glow-green">{page.title}</h1>
              {page.badge && (
                <span className="px-2 py-0.5 text-xs font-mono font-semibold rounded bg-accent text-accent-foreground">{page.badge}</span>
              )}
            </div>
            <ShareButton title={page.title} description={page.description} />
          </div>
          <p className="text-muted-foreground">{page.description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {page.commands.map((cmd) => (
              <a
                key={cmd.name}
                href={`#${cmd.name}`}
                className="px-2.5 py-1 text-xs font-mono rounded-md bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {cmd.name}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {page.commands.map((cmd) => (
            <CommandSection key={cmd.name} command={cmd} />
          ))}
        </div>
      </div>
    </DocsLayout>
  );
};

export default DocsPage;
