import { BarChart3, Bot, Calendar, CheckSquare, Database, ListOrdered, Mail, MessageSquareText, Search, ShieldAlert, ShieldCheck, Siren, Sparkles } from 'lucide-react'
import { PipelineDiagram } from './PipelineDiagram'
import { SimpleFlow } from './SimpleFlow'

export function ActAwareFlow() {
  return (
    <SimpleFlow
      tone="lavender"
      nodes={[
        { label: 'Logs', icon: Database },
        { label: 'Detection', icon: Search },
        { label: 'AI Analysis', icon: ShieldAlert },
        { label: 'Incident', icon: Siren },
        { label: 'Response', icon: ShieldCheck },
      ]}
    />
  )
}

export function EmailAgentFlow() {
  return (
    <SimpleFlow
      tone="peach"
      nodes={[
        { label: 'Emails', icon: Mail },
        { label: 'LLM Agent', icon: Bot },
        { label: 'Prioritization', icon: ListOrdered },
        { label: 'Tasks', icon: CheckSquare },
        { label: 'Scheduling', icon: Calendar },
      ]}
    />
  )
}

export function OrbitDeskFlow() {
  return (
    <SimpleFlow
      tone="mint"
      nodes={[
        { label: 'Question', icon: MessageSquareText },
        { label: 'Retrieval', icon: Search },
        { label: 'Generation', icon: Sparkles },
        { label: 'Verification', icon: ShieldCheck },
        { label: 'Answer', icon: CheckSquare },
      ]}
    />
  )
}

export function AgentPenTestFlow() {
  return (
    <SimpleFlow
      tone="blue"
      nodes={[
        { label: 'Target Agent', icon: Bot },
        { label: 'garak Attacks', icon: ShieldAlert },
        { label: 'Detection', icon: ShieldCheck },
        { label: 'ASR Scoring', icon: BarChart3 },
        { label: 'Dashboard', icon: Sparkles },
      ]}
    />
  )
}

export function ActAwareDiagram() {
  return (
    <PipelineDiagram
      tone="lavender"
      caption="10-layer pipeline, compressed here to its core stages. The LLM reasoning layer only activates when a human analyst requests it, and every SOAR action is RBAC-gated before execution."
      stages={[
        { label: 'Log Sources', sublabel: 'EDR · Firewall · IAM · Apps' },
        { label: 'Normalize & Store', sublabel: 'Elasticsearch, 80+ field mappings' },
        { label: 'Behavioral Aggregation', sublabel: '30+ features / user window' },
        { label: 'UEBA & Anomaly Detection', sublabel: 'IForest + LOF + HBOS ensemble' },
        { label: 'Correlation & Graph Modeling', sublabel: 'NetworkX attack paths' },
        { label: 'Fidelity Scoring', sublabel: 'weighted risk + provenance' },
        { label: 'LLM Reasoning', sublabel: 'LangGraph + Ollama', badge: 'human-triggered' },
        { label: 'SOAR Response', sublabel: 'RBAC-gated execution' },
      ]}
    />
  )
}

export function EmailAgentDiagram() {
  return (
    <PipelineDiagram
      tone="peach"
      caption="The agent reasons over each incoming message before it ever reaches the inbox view, so the UI shows a ranked worklist rather than a raw message stream."
      stages={[
        { label: 'Incoming Email', sublabel: 'connected mailbox' },
        { label: 'Agentic Triage', sublabel: 'context-aware prioritization' },
        { label: 'LLM Summarization', sublabel: 'thread → digest' },
        { label: 'Task & Schedule Extraction', sublabel: 'action items, dates' },
        { label: 'Supabase', sublabel: 'Postgres · Edge Functions · Auth' },
        { label: 'React Dashboard', sublabel: 'ranked worklist + compose' },
      ]}
    />
  )
}

export function OrbitDeskDiagram() {
  return (
    <PipelineDiagram
      tone="mint"
      caption="Every answer must pass the verification node — grounding, citation validity, and superseded-source checks — before it's returned. Ungrounded or unverifiable answers fail safe instead of guessing."
      stages={[
        { label: 'Question', sublabel: 'natural language' },
        { label: 'Triage', sublabel: 'nearest-neighbor routing' },
        { label: 'Retrieval', sublabel: 'sentence-transformer embeddings' },
        { label: 'Generation', sublabel: 'Qwen2.5-1.5B-Instruct' },
        { label: 'Verification', sublabel: 'grounding + citation checks', badge: 'fail-safe' },
        { label: 'Answer', sublabel: 'or escalate / clarify' },
      ]}
    />
  )
}

export function AgentPenTestDiagram() {
  return (
    <PipelineDiagram
      tone="blue"
      caption="The target agent is built from scratch in this repo, not borrowed, so every attack surface — prompt injection, tool-output injection, memory poisoning via the notes store — is fully understood. Detection is wired directly into the agent's own verify node rather than bolted on as a separate service."
      stages={[
        { label: 'Attack Corpus', sublabel: 'JailbreakBench · StrongREJECT · deepset' },
        { label: 'Target Agent', sublabel: 'LangGraph: tools + SQLite memory' },
        { label: 'Attack Runner', sublabel: 'garak REST generator' },
        { label: 'Detection Layer', sublabel: 'grounding + memory-integrity + injection detector', badge: 'in-graph' },
        { label: 'Scorer', sublabel: 'ASR + precision/recall vs. JailbreakBench' },
        { label: 'Dashboard', sublabel: 'React/TS, deployed to GitHub Pages' },
      ]}
    />
  )
}
